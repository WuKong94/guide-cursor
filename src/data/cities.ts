export interface City {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  highlights: string[];
  attractions: Attraction[];
  foods: Food[];
  transport: string;
  accommodation: string;
  shopping: string[];
  heroImage: string;
  galleryImages: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Attraction {
  name: string;
  nameChinese: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
}

export interface Food {
  name: string;
  nameChinese: string;
  description: string;
  image: string;
  price: string;
}

export const cities: City[] = [
  {
    id: 'beijing',
    name: 'Beijing',
    nameChinese: '北京',
    description: 'The majestic capital city where ancient imperial grandeur meets modern innovation. Experience 3,000 years of history in the Forbidden City, walk along the Great Wall, and savor authentic Peking duck.',
    highlights: [
      'Forbidden City & Tiananmen Square',
      'Great Wall of China',
      'Temple of Heaven',
      'Hutong Culture',
      'Peking Duck'
    ],
    attractions: [
      {
        name: 'Forbidden City',
        nameChinese: '紫禁城',
        description: 'The world\'s largest palace complex, home to 24 emperors for nearly 500 years.',
        image: '/images/beijing/forbidden-city.jpg',
        rating: 4.8,
        duration: '3-4 hours'
      },
      {
        name: 'Great Wall of China',
        nameChinese: '长城',
        description: 'One of the Seven Wonders of the World, stretching over 13,000 miles.',
        image: '/images/beijing/great-wall.jpg',
        rating: 4.9,
        duration: 'Full day'
      },
      {
        name: 'Temple of Heaven',
        nameChinese: '天坛',
        description: 'A masterpiece of architecture and landscape design where emperors prayed for good harvests.',
        image: '/images/beijing/temple-heaven.jpg',
        rating: 4.7,
        duration: '2-3 hours'
      },
      {
        name: 'Summer Palace',
        nameChinese: '颐和园',
        description: 'A vast ensemble of lakes, gardens and palaces, UNESCO World Heritage Site.',
        image: '/images/beijing/summer-palace.jpg',
        rating: 4.6,
        duration: '3-4 hours'
      }
    ],
    foods: [
      {
        name: 'Peking Duck',
        nameChinese: '北京烤鸭',
        description: 'Crispy skin duck served with pancakes, scallions, and hoisin sauce.',
        image: '/images/beijing/peking-duck.jpg',
        price: '$25-40'
      },
      {
        name: 'Jianbing',
        nameChinese: '煎饼',
        description: 'Popular street food breakfast crepe with egg, cilantro, and sauce.',
        image: '/images/beijing/jianbing.jpg',
        price: '$2-3'
      },
      {
        name: 'Zhajiangmian',
        nameChinese: '炸酱面',
        description: 'Thick wheat noodles topped with a savory fermented bean sauce.',
        image: '/images/beijing/zhajiangmian.jpg',
        price: '$3-5'
      }
    ],
    transport: 'Beijing Capital International Airport, extensive subway system, taxi, ride-sharing',
    accommodation: 'From luxury hotels in the city center to traditional courtyard hotels in hutongs',
    shopping: ['Wangfujing Street', 'Silk Street Market', 'Panjiayuan Antique Market'],
    heroImage: '/images/beijing/hero.jpg',
    galleryImages: [
      '/images/beijing/gallery1.jpg',
      '/images/beijing/gallery2.jpg',
      '/images/beijing/gallery3.jpg',
      '/images/beijing/gallery4.jpg'
    ],
    coordinates: { lat: 39.9042, lng: 116.4074 }
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    nameChinese: '上海',
    description: 'China\'s most cosmopolitan city, where East meets West in perfect harmony. Marvel at the futuristic skyline, stroll along the historic Bund, and experience world-class shopping and dining.',
    highlights: [
      'The Bund Waterfront',
      'Oriental Pearl Tower',
      'Yu Garden',
      'French Concession',
      'Xiaolongbao Dumplings'
    ],
    attractions: [
      {
        name: 'The Bund',
        nameChinese: '外滩',
        description: 'Iconic waterfront with colonial architecture and stunning skyline views.',
        image: '/images/shanghai/bund.jpg',
        rating: 4.8,
        duration: '2-3 hours'
      },
      {
        name: 'Oriental Pearl Tower',
        nameChinese: '东方明珠塔',
        description: 'Distinctive TV tower offering panoramic city views from observation decks.',
        image: '/images/shanghai/oriental-pearl.jpg',
        rating: 4.5,
        duration: '2 hours'
      },
      {
        name: 'Yu Garden',
        nameChinese: '豫园',
        description: 'Exquisite classical Chinese garden with traditional architecture.',
        image: '/images/shanghai/yu-garden.jpg',
        rating: 4.6,
        duration: '2-3 hours'
      },
      {
        name: 'Shanghai Museum',
        nameChinese: '上海博物馆',
        description: 'World-class museum featuring ancient Chinese art and artifacts.',
        image: '/images/shanghai/museum.jpg',
        rating: 4.7,
        duration: '2-4 hours'
      }
    ],
    foods: [
      {
        name: 'Xiaolongbao',
        nameChinese: '小笼包',
        description: 'Delicate soup dumplings with pork filling and savory broth.',
        image: '/images/shanghai/xiaolongbao.jpg',
        price: '$8-15'
      },
      {
        name: 'Sheng Jian Bao',
        nameChinese: '生煎包',
        description: 'Pan-fried pork buns with crispy bottom and juicy filling.',
        image: '/images/shanghai/shengjian.jpg',
        price: '$3-5'
      },
      {
        name: 'Hairy Crab',
        nameChinese: '大闸蟹',
        description: 'Seasonal delicacy served with ginger and vinegar.',
        image: '/images/shanghai/hairy-crab.jpg',
        price: '$30-60'
      }
    ],
    transport: 'Shanghai Pudong/Hongqiao Airports, world\'s longest metro system, taxi, ride-sharing',
    accommodation: 'International hotel chains, boutique hotels in French Concession, riverside luxury',
    shopping: ['Nanjing Road', 'Huaihai Road', 'Xintiandi', 'Tianzifang'],
    heroImage: '/images/shanghai/hero.jpg',
    galleryImages: [
      '/images/shanghai/gallery1.jpg',
      '/images/shanghai/gallery2.jpg',
      '/images/shanghai/gallery3.jpg',
      '/images/shanghai/gallery4.jpg'
    ],
    coordinates: { lat: 31.2304, lng: 121.4737 }
  },
  {
    id: 'guangzhou',
    name: 'Guangzhou',
    nameChinese: '广州',
    description: 'The birthplace of Cantonese cuisine and the gateway to southern China. Enjoy dim sum culture, explore ancient temples, and cruise along the Pearl River at night.',
    highlights: [
      'Canton Tower',
      'Chen Clan Academy',
      'Pearl River Night Cruise',
      'Dim Sum Capital',
      'Shamian Island'
    ],
    attractions: [
      {
        name: 'Canton Tower',
        nameChinese: '广州塔',
        description: 'Architectural marvel offering spectacular city views and thrilling attractions.',
        image: '/images/guangzhou/canton-tower.jpg',
        rating: 4.7,
        duration: '2-3 hours'
      },
      {
        name: 'Chen Clan Academy',
        nameChinese: '陈家祠',
        description: 'Masterpiece of Lingnan architecture with intricate wood and stone carvings.',
        image: '/images/guangzhou/chen-clan.jpg',
        rating: 4.6,
        duration: '1-2 hours'
      },
      {
        name: 'Shamian Island',
        nameChinese: '沙面岛',
        description: 'Historic district with European colonial architecture and tree-lined streets.',
        image: '/images/guangzhou/shamian.jpg',
        rating: 4.5,
        duration: '2-3 hours'
      },
      {
        name: 'Pearl River',
        nameChinese: '珠江',
        description: 'Scenic river cruise showcasing the illuminated city skyline.',
        image: '/images/guangzhou/pearl-river.jpg',
        rating: 4.8,
        duration: '1.5 hours'
      }
    ],
    foods: [
      {
        name: 'Dim Sum',
        nameChinese: '点心',
        description: 'Traditional Cantonese tea house experience with various small dishes.',
        image: '/images/guangzhou/dimsum.jpg',
        price: '$15-25'
      },
      {
        name: 'Wonton Noodles',
        nameChinese: '云吞面',
        description: 'Silky noodles in clear broth with delicate shrimp wontons.',
        image: '/images/guangzhou/wonton.jpg',
        price: '$4-6'
      },
      {
        name: 'Roast Goose',
        nameChinese: '烧鹅',
        description: 'Perfectly roasted goose with crispy skin and tender meat.',
        image: '/images/guangzhou/roast-goose.jpg',
        price: '$20-35'
      }
    ],
    transport: 'Guangzhou Baiyun International Airport, comprehensive metro system, taxi, bus',
    accommodation: 'Business hotels near Canton Fair, luxury hotels by Pearl River, boutique options',
    shopping: ['Beijing Road', 'Shangxiajiu Pedestrian Street', 'Onelink Walk'],
    heroImage: '/images/guangzhou/hero.jpg',
    galleryImages: [
      '/images/guangzhou/gallery1.jpg',
      '/images/guangzhou/gallery2.jpg',
      '/images/guangzhou/gallery3.jpg',
      '/images/guangzhou/gallery4.jpg'
    ],
    coordinates: { lat: 23.1291, lng: 113.2644 }
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    nameChinese: '成都',
    description: 'The laid-back capital of Sichuan province, famous for giant pandas, spicy hotpot, and UNESCO City of Gastronomy. Experience the perfect blend of ancient culture and modern lifestyle.',
    highlights: [
      'Giant Panda Base',
      'Sichuan Hotpot',
      'Jinli Ancient Street',
      'Kuanzhai Alley',
      'Sichuan Opera'
    ],
    attractions: [
      {
        name: 'Giant Panda Base',
        nameChinese: '大熊猫基地',
        description: 'World-renowned research and breeding center for giant pandas.',
        image: '/images/chengdu/panda-base.jpg',
        rating: 4.9,
        duration: '3-4 hours'
      },
      {
        name: 'Jinli Ancient Street',
        nameChinese: '锦里古街',
        description: 'Historic street recreating the charm of ancient Chengdu with shops and snacks.',
        image: '/images/chengdu/jinli.jpg',
        rating: 4.4,
        duration: '2-3 hours'
      },
      {
        name: 'Kuanzhai Alley',
        nameChinese: '宽窄巷子',
        description: 'Well-preserved Qing Dynasty architecture with modern cafes and shops.',
        image: '/images/chengdu/kuanzhai.jpg',
        rating: 4.5,
        duration: '2-3 hours'
      },
      {
        name: 'Wuhou Shrine',
        nameChinese: '武侯祠',
        description: 'Memorial temple dedicated to Zhuge Liang and Liu Bei from Three Kingdoms period.',
        image: '/images/chengdu/wuhou.jpg',
        rating: 4.3,
        duration: '1-2 hours'
      }
    ],
    foods: [
      {
        name: 'Sichuan Hotpot',
        nameChinese: '四川火锅',
        description: 'Fiery and numbing hotpot with fresh ingredients and spicy broth.',
        image: '/images/chengdu/hotpot.jpg',
        price: '$15-30'
      },
      {
        name: 'Mapo Tofu',
        nameChinese: '麻婆豆腐',
        description: 'Classic Sichuan dish with silky tofu in spicy, numbing sauce.',
        image: '/images/chengdu/mapo-tofu.jpg',
        price: '$5-8'
      },
      {
        name: 'Dan Dan Noodles',
        nameChinese: '担担面',
        description: 'Spicy noodles with ground pork and preserved vegetables.',
        image: '/images/chengdu/dandan.jpg',
        price: '$3-5'
      }
    ],
    transport: 'Chengdu Shuangliu International Airport, extensive metro system, taxi, bike-sharing',
    accommodation: 'Traditional courtyard hotels, modern business hotels, panda-themed accommodations',
    shopping: ['Chunxi Road', 'Taikoo Li', 'IFS International Finance Square'],
    heroImage: '/images/chengdu/hero.jpg',
    galleryImages: [
      '/images/chengdu/gallery1.jpg',
      '/images/chengdu/gallery2.jpg',
      '/images/chengdu/gallery3.jpg',
      '/images/chengdu/gallery4.jpg'
    ],
    coordinates: { lat: 30.5728, lng: 104.0668 }
  },
  {
    id: 'hangzhou',
    name: 'Hangzhou',
    nameChinese: '杭州',
    description: 'Paradise on Earth with the poetic West Lake, traditional tea culture, and silk heritage. Marco Polo called it "the most beautiful and magnificent city in the world."',
    highlights: [
      'West Lake UNESCO Site',
      'Lingyin Temple',
      'Dragon Well Tea',
      'Grand Canal',
      'Traditional Silk'
    ],
    attractions: [
      {
        name: 'West Lake',
        nameChinese: '西湖',
        description: 'UNESCO World Heritage site renowned for scenic beauty in all seasons.',
        image: '/images/hangzhou/west-lake.jpg',
        rating: 4.8,
        duration: 'Half day'
      },
      {
        name: 'Lingyin Temple',
        nameChinese: '灵隐寺',
        description: 'One of China\'s most famous Buddhist temples with ancient stone carvings.',
        image: '/images/hangzhou/lingyin.jpg',
        rating: 4.7,
        duration: '2-3 hours'
      },
      {
        name: 'Longjing Tea Village',
        nameChinese: '龙井茶村',
        description: 'Famous tea plantation where Dragon Well green tea is cultivated.',
        image: '/images/hangzhou/longjing.jpg',
        rating: 4.5,
        duration: '2-3 hours'
      },
      {
        name: 'Grand Canal',
        nameChinese: '京杭大运河',
        description: 'Ancient waterway connecting Beijing and Hangzhou, UNESCO World Heritage.',
        image: '/images/hangzhou/grand-canal.jpg',
        rating: 4.6,
        duration: '1-2 hours'
      }
    ],
    foods: [
      {
        name: 'West Lake Fish',
        nameChinese: '西湖醋鱼',
        description: 'Sweet and sour fish dish, a signature of Hangzhou cuisine.',
        image: '/images/hangzhou/west-lake-fish.jpg',
        price: '$12-20'
      },
      {
        name: 'Longjing Shrimp',
        nameChinese: '龙井虾仁',
        description: 'Fresh shrimp stir-fried with Dragon Well tea leaves.',
        image: '/images/hangzhou/longjing-shrimp.jpg',
        price: '$15-25'
      },
      {
        name: 'Beggar\'s Chicken',
        nameChinese: '叫花鸡',
        description: 'Whole chicken wrapped in lotus leaves and baked in clay.',
        image: '/images/hangzhou/beggars-chicken.jpg',
        price: '$25-40'
      }
    ],
    transport: 'Hangzhou Xiaoshan International Airport, metro system, taxi, bike-sharing around West Lake',
    accommodation: 'Luxury resorts by West Lake, boutique hotels in historic districts, business hotels',
    shopping: ['Hefang Street', 'Wulin Square', 'Silk Market'],
    heroImage: '/images/hangzhou/hero.jpg',
    galleryImages: [
      '/images/hangzhou/gallery1.jpg',
      '/images/hangzhou/gallery2.jpg',
      '/images/hangzhou/gallery3.jpg',
      '/images/hangzhou/gallery4.jpg'
    ],
    coordinates: { lat: 30.2741, lng: 120.1551 }
  }
]; 