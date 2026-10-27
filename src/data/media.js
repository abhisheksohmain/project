// Replace these with your own premium images / videos (put videos in /public/videos)
const u = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`
export const IMG = {
  hero: u('photo-1486406146926-c627a92ad1ab'), hvac: u('photo-1581094794329-c8112a89af12'),
  site: u('photo-1504307651254-35680f356dfd'), bim: u('photo-1503387762-592deb58ef4e'),
  team: u('photo-1521791136064-7986c2920216'), plant: u('photo-1581092918056-0c4c3acd3789'),
  office: u('photo-1497366216548-37526070297c'), tower: u('photo-1545324418-cc1a3fa10c00'),
  mentor: u('photo-1522202176988-66273c2fd55f'), hospital: u('photo-1519494026892-80bbd2d6fd0d')
}
export const VIDEO = { hero: '/videos/hero.mp4', showreel: '/videos/showreel.mp4' }
