export class SocialMedia {
  public readonly icon: string;
  public readonly name: string;
  public readonly url: string;

  public constructor(icon: string, name: string, url: string) {
    this.icon = icon;
    this.name = name;
    this.url = url;
  }
}
