export class Menu {
  public readonly name: string;
  public readonly icon?: string;

  public constructor(name: string) {
    this.name = name;
  }
}

export class PathMenu extends Menu {
  public readonly path: string;

  public constructor(name: string, path: string) {
    super(name);
    this.path = path;
  }
}

export class UrlMenu extends Menu {
  public readonly url: string;

  public constructor(name: string, url: string) {
    super(name);
    this.url = url;
  }
}
