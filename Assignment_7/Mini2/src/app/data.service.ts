import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  d = [{photo : 'assets/photos/grant-ritchie-338179-500.jpg', name : 'one', caption : 'acs', user: "assets/faces/male/41.jpg"},
  {photo : 'assets/photos/grant-ritchie-338179-500.jpg', name : 'two', caption : 'acs', user: "assets/faces/male/41.jpg"},
  {photo : 'assets/photos/grant-ritchie-338179-500.jpg', name : 'three', caption : 'acs', user: "assets/faces/male/41.jpg"}];
  constructor() { }
}
