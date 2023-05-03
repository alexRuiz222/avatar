import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/avatar';
import { AvatarApiService } from 'src/app/shared/services/avatar-api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  perPage = 20;
  page = 1;
  characters: Character[] | undefined;
  constructor(private _avatarApi: AvatarApiService) { }

  getCharacters() {
    this._avatarApi.getCharacters(this.perPage, this.page).subscribe(data => {
      console.log(data);
    }
      , error => {
        console.error(error);
      })
  }

  getRandomCharacters() {
    this._avatarApi.getRandomCharacters().subscribe((data: any) => {
      console.log(data);
      this.characters = data;
    }, error => {
      console.error(error);
    })
  }

  ngOnInit(): void {
    this.getRandomCharacters();
  }

  inFunction(val: string): void {
    console.log(val);
  }

}
