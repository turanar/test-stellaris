export class Config {
  container: string
  callback: any

  rootOrientation: string = 'WEST' // NORTH || EAST || WEST || SOUTH
  nodeAlign: string = 'TOP'
  hideRootNode: boolean = true
  siblingSeparation: number = 20
  subTeeSeparation:  number = 20
  scrollbar: string = 'resize'
  connectors: any = {
    type: 'step',
    style: {
      stroke: 'white'
    }
  }
  node: any = {
    HTMLclass: 'tech',
    collapsable: false
  }
};
