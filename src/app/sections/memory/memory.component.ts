import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Character } from 'src/app/shared/models/avatar';
import { AvatarApiService } from 'src/app/shared/services/avatar-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit, AfterViewInit {
  soundActive = true;
  music: HTMLAudioElement = new Audio();
  whipSound: HTMLAudioElement = new Audio();
  slashSound: HTMLAudioElement = new Audio();
  overSound: HTMLAudioElement = new Audio();
  isPlaying: boolean = false;
  selectedCards: string[] = [];
  characters: Character[] = [];
  quantity: number = 6;
  playing: Boolean = false;
  loading: Boolean = false;
  comparing: Boolean = false;
  constructor(private _AvatarApiService: AvatarApiService) {

  }

  ngOnInit(): void {

    this.startGame();
  }

  ngAfterViewInit() {
    this.whipSound = new Audio('/assets/sounds/whip.mp3');
    this.slashSound = new Audio('/assets/sounds/slash.mp3');
    this.overSound = new Audio('/assets/sounds/bambu.mp3');
    this.overSound.volume = 0.1;
    this.music = new Audio('/assets/sounds/music.mp3');
    this.playSound('music');
  }

  startGame() {
    this.playing = true;
    this.loading = true;
    this._AvatarApiService.getCharactersForMemory(this.quantity).subscribe(
      characters => {
        this.characters = characters;
        this.loading = false;
      },
      error => { this.loading = false; console.error(error) }
    );
  }

  async clickCard(card: Character) {
    if (!card.hidden || this.selectedCards.length > 1) return;
    this.playSound("flipCard");
    card.hidden = false;
    this.selectedCards.push(card._id);
    if (this.selectedCards.length > 1) {
      if (this.selectedCards[0] === this.selectedCards[1]) {
        this.selectedCards = [];
        this.checkCompleted();
        return;
      }
      await new Promise(() => setTimeout(() => {
        this.hideCards(this.characters.filter(char => char._id == this.selectedCards[0] || char._id == this.selectedCards[1] && !char.hidden));
      }, 1000));
    }


  }

  hideCards(cards: Character[]) {
    this.playSound("flipCards");
    cards.forEach(char => char.hidden = true);
    this.selectedCards = [];
  }

  async checkCompleted() {
    if (this.characters.filter(char => !char.hidden).length === this.characters.length) {
      this.playSound("success");
      await new Promise(() => setTimeout(() => {
        Swal.fire({
          title: 'Excellent!!',
          text: "You are already finish!",
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Play again!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.startGame();
          } else {
            // this.characters = [];
            // this.playing = false;
          }
        })
      }, 500));

    }
  }

  stopSound(): void {
    this.isPlaying = false;
  }

  playSound(type: string): void {
    if (!this.soundActive) return;
    switch (type) {
      case "overCard":
        if (this.isPlaying) return;
        this.overSound.currentTime = 0;
        this.overSound.play();
        this.isPlaying = true;
        break;
      case "flipCard":
        this.slashSound.play();
        break;
      case "flipCards":
        this.whipSound.play();
        break;
      case "success":
        const sound = new Audio('/assets/sounds/magic.mp3');
        sound.play();
        break;
      case "music":
        this.music.volume = 0.2;
        this.music.play();
        this.music.loop = true;
        break;
      default:
        break;
    }
  }

}
