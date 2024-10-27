import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import type { GiphySearchResponse, Gif } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = "iBdBFRMIhTQw4HcDwMSi0jHJ1MfXkDTl";

@Injectable({ providedIn: 'root'})
export class GifsService {
  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string) {
    tag = tag.toLowerCase();

    const tagAlreadyExists = this._tagsHistory.includes(tag);

    // If exists, we delete it
    if (tagAlreadyExists) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    // Put the new search and the top of the array
    this._tagsHistory.unshift(tag);
    // Keep the last 10 searches
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private loadLocalStorage() {
    const tagsHistory = localStorage.getItem("tags_history");

    if (!tagsHistory) return;

    this._tagsHistory = JSON.parse(tagsHistory);

    if (this._tagsHistory.length <= 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  private saveLocalStorage() {
    localStorage.setItem("tags_history", JSON.stringify(this._tagsHistory));
  }

  public searchTag(tag: string) {
    if (tag.length === 0) return;

    this.organizeTagsHistory(tag);

    const params = new HttpParams()
      .set("api_key", GIPHY_API_KEY)
      .set("q", tag)
      .set("limit", "10");

    this.http.get<GiphySearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp =>{
        this.gifsList = resp.data;
      })
  }
}
