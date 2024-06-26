type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
type topType = Pick<AllType, 'name' | 'color'>;
type botType = Pick<AllType, 'position' | 'weight'>;

function compare (top: topType, bottom: botType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
console.log(compare(
    { name: `Olex`, color: `pink` },
    { position: 5, weight: 56 }
));
