export class Character {
  affiliation: string = '';
  allies: string[] | undefined;
  enemies: string[] | undefined;
  first: string | undefined;
  gender: string | undefined;
  hair: string | undefined;
  name: string | undefined;
  photoUrl: string | undefined;
  profession: string | undefined;
  _id: string = '';
  weapon: string = '';
  color: string = '';
  hidden = false;
  index: number = 0;
}
