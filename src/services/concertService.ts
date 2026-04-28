export interface Concert {
  id: string;
  title: string;
  city: string;
  venue?: string;
}

let concerts: Concert[] = [
  { id: "1", title: "Rock Fest", city: "Columbus", venue: "Arena" },
  { id: "2", title: "Jazz Night", city: "Dayton", venue: "Club" }
];

export function listConcerts() {
  return concerts;
}

export function getConcert(id: string) {
  return concerts.find(c => c.id === id);
}

export function updateConcert(id: string, data: Partial<Concert>) {
  const concert = concerts.find(c => c.id === id);
  if (concert) {
    Object.assign(concert, data);
  }
  return concert;
}

export function deleteConcert(id: string) {
  const index = concerts.findIndex(c => c.id === id);
  if (index !== -1) {
    concerts.splice(index, 1);
    return true;
  }
  return false;
}