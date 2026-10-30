import { StoreOutlet } from '../types';

export const STORE_OUTLETS: StoreOutlet[] = [
  {
    id: 'store-blr-koramangala',
    name: 'Frozen Bottle - Koramangala 5th Block',
    city: 'Bengaluru',
    area: 'Koramangala',
    address: 'No. 80 Feet Road, 5th Block, Opposite Sony World Signal, Bengaluru 560095',
    timing: '11:00 AM – 2:00 AM (Late Night)',
    phone: '+91 80 4123 8890',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 1.2
  },
  {
    id: 'store-blr-indiranagar',
    name: 'Frozen Bottle - Indiranagar 100ft Road',
    city: 'Bengaluru',
    area: 'Indiranagar',
    address: '777/A, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru 560038',
    timing: '11:00 AM – 1:30 AM',
    phone: '+91 80 4155 9211',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: true,
    distanceKm: 3.8
  },
  {
    id: 'store-blr-hsr',
    name: 'Frozen Bottle - HSR Layout Sector 2',
    city: 'Bengaluru',
    area: 'HSR Layout',
    address: '27th Main Rd, Sector 2, HSR Layout, Bengaluru 560102',
    timing: '11:00 AM – 1:00 AM',
    phone: '+91 80 4991 3320',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 4.5
  },
  {
    id: 'store-mum-bandra',
    name: 'Frozen Bottle - Bandra West',
    city: 'Mumbai',
    area: 'Bandra',
    address: 'Hill Road, Near Mehboob Studio, Bandra West, Mumbai 400050',
    timing: '11:30 AM – 3:00 AM (Late Night)',
    phone: '+91 22 2640 1902',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 2.1
  },
  {
    id: 'store-mum-juhu',
    name: 'Frozen Bottle - Juhu Tara Road',
    city: 'Mumbai',
    area: 'Juhu',
    address: 'Opposite Juhu Beach, Juhu Tara Road, Vile Parle West, Mumbai 400049',
    timing: '11:00 AM – 2:00 AM',
    phone: '+91 22 2618 4400',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: true,
    distanceKm: 5.6
  },
  {
    id: 'store-del-cyberhub',
    name: 'Frozen Bottle - DLF CyberHub',
    city: 'Delhi NCR',
    area: 'Gurugram',
    address: 'Shop 14, Ground Floor, DLF CyberHub, DLF Phase 2, Gurugram 122002',
    timing: '10:30 AM – 1:00 AM',
    phone: '+91 124 492 8812',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 2.4
  },
  {
    id: 'store-del-cp',
    name: 'Frozen Bottle - Connaught Place',
    city: 'Delhi NCR',
    area: 'Connaught Place',
    address: 'Inner Circle, Block F, Connaught Place, New Delhi 110001',
    timing: '11:00 AM – 12:30 AM',
    phone: '+91 11 4301 2219',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 7.1
  },
  {
    id: 'store-hyd-jubilee',
    name: 'Frozen Bottle - Jubilee Hills Road 36',
    city: 'Hyderabad',
    area: 'Jubilee Hills',
    address: 'Road No. 36, Near Peddamma Temple Metro, Jubilee Hills, Hyderabad 500033',
    timing: '11:00 AM – 2:00 AM',
    phone: '+91 40 2355 4901',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: true,
    distanceKm: 3.2
  },
  {
    id: 'store-chn-annanagar',
    name: 'Frozen Bottle - Anna Nagar 2nd Avenue',
    city: 'Chennai',
    area: 'Anna Nagar',
    address: '2nd Avenue, Near Roundtana, Anna Nagar, Chennai 600040',
    timing: '11:00 AM – 1:00 AM',
    phone: '+91 44 2621 0045',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 4.0
  },
  {
    id: 'store-pune-koregaon',
    name: 'Frozen Bottle - Koregaon Park Lane 7',
    city: 'Pune',
    area: 'Koregaon Park',
    address: 'Lane 7, Next to Arthur’s Theme, Koregaon Park, Pune 411001',
    timing: '11:30 AM – 1:30 AM',
    phone: '+91 20 2615 7800',
    hasBobaBar: true,
    hasDineIn: true,
    hasDriveThru: false,
    distanceKm: 2.9
  }
];

export const CITIES = ['All Cities', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune'] as const;
