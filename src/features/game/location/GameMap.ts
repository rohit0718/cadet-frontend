import { GameLocation } from '../location/GameMapTypes';
import { GameImage } from '../commons/CommonsTypes';

class GameMap {
  private locationAssets: Map<string, GameImage>;
  private navigation: Map<string, string[]>;
  private locations: Map<string, GameLocation>;

  constructor() {
    this.locationAssets = new Map<string, GameImage>();
    this.navigation = new Map<string, string[]>();
    this.locations = new Map<string, GameLocation>();
  }

  public addLocationAsset(asset: GameImage) {
    this.locationAssets.set(asset.key, asset);
  }

  public getLocationAsset(location: GameLocation): GameImage | undefined {
    return this.locationAssets.get(location.assetKey);
  }

  public getLocationAssets(): Map<string, GameImage> {
    return this.locationAssets;
  }

  public setNavigationFrom(id: string, destination: string[]) {
    this.navigation.set(id, destination);
  }

  public getNavigationFrom(id: string): string[] | undefined {
    return this.navigation.get(id);
  }

  public setLocation(location: GameLocation): void {
    this.locations.set(location.name, location);
  }

  public getLocation(id: string): GameLocation | undefined {
    return this.locations.get(id);
  }

  public getLocations(): Map<string, GameLocation> {
    return this.locations;
  }
}

export default GameMap;