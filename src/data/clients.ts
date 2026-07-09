export interface Client {
  id: string;
  name: string;
  logo: string;
  category: 'ecommerce' | 'dynamic' | 'static';
}

export const clientsData: Client[] = [
  // --- ROW 1 ---
  {
    id: "c1",
    name: "Atom",
    logo: "/clients/Atom.png",
    category: "static"
  },
  {
    id: "c2",
    name: "City Fresh",
    logo: "/clients/City-removebg-preview.png",
    category: "static"
  },
  {
    id: "c3",
    name: "Empower",
    logo: "/clients/Empower.png",
    category: "static"
  },
  {
    id: "c4",
    name: "GC Life",
    logo: "/clients/Gc 2.png",
    category: "static"
  },
  {
    id: "c5",
    name: "BMR",
    logo: "/clients/IMG_6255.PNG",
    category: "static"
  },
  {
    id: "c6",
    name: "Great Choice",
    logo: "/clients/IMG_6257.PNG",
    category: "static"
  },
  {
    id: "c7",
    name: "Qartel",
    logo: "/clients/IMG_6262.PNG",
    category: "static"
  },
  {
    id: "c8",
    name: "Inovact",
    logo: "/clients/IMG_6264.PNG",
    category: "static"
  },

  // --- ROW 2 ---
  {
    id: "c9",
    name: "Client Brand",
    logo: "/clients/image copy.png", // The blue circular logo in Row 2 Col 1
    category: "static"
  },
  {
    id: "c10",
    name: "Auto Accessories",
    logo: "/clients/JV_gold_2-removebg-preview (2).png",
    category: "static"
  },
  {
    id: "c11",
    name: "Myoutlet",
    logo: "/clients/Myoutlet logo-01.png",
    category: "static"
  },
  {
    id: "c12",
    name: "SN",
    logo: "/clients/SN Institute of Technology.png",
    category: "static"
  },
  {
    id: "c13",
    name: "SR Flames",
    logo: "/clients/SRFlames-removebg-preview.png",
    category: "ecommerce"
  },
  {
    id: "c14",
    name: "Shawarma Fusion",
    logo: "/clients/Shawarma_Fusion_logo_design__1__2-removebg-preview.png",
    category: "static"
  },
  {
    id: "c15",
    name: "Tokyo",
    logo: "/clients/Tokyo__2-removebg-preview.PNG",
    category: "static"
  },
  {
    id: "c16",
    name: "Aqua Pool",
    logo: "/clients/aquapool-removebg-preview.png",
    category: "ecommerce"
  },

  // --- ROW 3 ---
  {
    id: "c17",
    name: "Codeverse",
    logo: "/clients/codeverse.PNG",
    category: "static"
  },
  {
    id: "c18",
    name: "Cosmotech",
    logo: "/clients/cosmotech-removebg-preview.png",
    category: "dynamic"
  },
  {
    id: "c19",
    name: "Danush",
    logo: "/clients/danush-removebg-preview.png",
    category: "static"
  },
  {
    id: "c20",
    name: "Delmon",
    logo: "/clients/delmon_logo_bg-removebg-preview.png",
    category: "ecommerce" // user: 'ecommerce-aquapool,srflames,nodelmen'
  },
  {
    id: "c21",
    name: "Friends Enterprises",
    logo: "/clients/friends logo (1) 2.png",
    category: "static"
  },
  {
    id: "c22",
    name: "TPC",
    logo: "/clients/jpc.png",
    category: "static"
  },
  {
    id: "c23",
    name: "Nice Tools",
    logo: "/clients/logo-removebg-preview (1).png",
    category: "dynamic"
  },
  {
    id: "c24",
    name: "Noorleen",
    logo: "/clients/noor.png",
    category: "static"
  },

  // --- ROW 4 ---
  {
    id: "c25",
    name: "Rayan",
    logo: "/clients/rayan-removebg-preview.png",
    category: "static"
  },
  {
    id: "c26",
    name: "Sunbird",
    logo: "/clients/sunbird-removebg-preview.png",
    category: "dynamic"
  },
  {
    id: "c27",
    name: "Tweaki",
    logo: "/clients/tweaki.png",
    category: "static"
  },
  {
    id: "c28",
    name: "Zain",
    logo: "/clients/zain logo2.png",
    category: "static"
  },
  {
    id: "c29",
    name: "Zendo Arabic",
    logo: "/clients/zendo-arabic-black-logo.png",
    category: "static"
  },
  {
    id: "c30",
    name: "Zendo",
    logo: "/clients/zendo.png",
    category: "static"
  }
];
