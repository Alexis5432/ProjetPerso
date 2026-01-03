import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  features: string[];
  materials: string[];
  dimensions: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sac fourre-tout Classic',
      description: 'Grand sac parfait pour le quotidien, fabriqué à partir de tissus recyclés.',
      longDescription: `Ce magnifique sac fourre-tout Classic est l'accessoire idéal pour accompagner votre quotidien. 
        Confectionné avec amour à partir de tissus recyclés soigneusement sélectionnés, chaque pièce est unique et raconte une histoire. 
        Sa grande capacité vous permet de transporter tout ce dont vous avez besoin : ordinateur portable, documents, bouteille d'eau et plus encore.
        Les coutures renforcées garantissent une durabilité exceptionnelle, tandis que la doublure intérieure protège vos effets personnels.`,
      price: 45,
      images: ['assets/IMG_sac_1.jpg', 'assets/IMG_sac_2.jpg', 'assets/IMG_sac_3.jpg'],
      features: ['Grande capacité', 'Poches intérieures', 'Fermeture éclair', 'Bandoulière ajustable'],
      materials: ['Tissus recyclés', 'Coton bio', 'Fermetures métalliques recyclées'],
      dimensions: '40cm x 35cm x 15cm'
    },
    {
      id: 2,
      name: 'Sacoche Bohème',
      description: 'Sacoche élégante au style bohème, parfaite pour les sorties.',
      longDescription: `La Sacoche Bohème incarne l'esprit libre et créatif de Miss Julie. 
        Réalisée à partir de matériaux récupérés et revalorisés, cette sacoche apporte une touche d'originalité à toutes vos tenues.
        Son design unique combine fonctionnalité et esthétique, avec des détails artisanaux qui la rendent vraiment spéciale.
        Légère et pratique, elle est idéale pour vos sorties en ville ou vos escapades du week-end.`,
      price: 55,
      images: ['assets/IMG_sac_2.jpg', 'assets/IMG_sac_2.jpg', 'assets/IMG_sac_2.jpg'],
      features: ['Style unique', 'Bandoulière longue', 'Compartiment sécurisé', 'Finitions artisanales'],
      materials: ['Jeans recyclé', 'Cuir végétal', 'Fils de coton bio'],
      dimensions: '25cm x 20cm x 8cm'
    },
    {
      id: 3,
      name: 'Mini Sac Éco',
      description: 'Petit sac pratique pour les essentiels, 100% éco-responsable.',
      longDescription: `Le Mini Sac Éco est la preuve que petit rime avec pratique et responsable.
        Ce sac compact est parfait pour celles et ceux qui préfèrent voyager léger sans sacrifier le style.
        Fabriqué entièrement à partir de matériaux recyclés, il représente notre engagement envers un avenir plus durable.
        Malgré sa taille compacte, il offre assez d'espace pour votre téléphone, portefeuille, clés et quelques essentiels supplémentaires.`,
      price: 35,
      images: ['assets/sac.jpg', 'assets/sac.jpg', 'assets/sac.jpg'],
      features: ['Format compact', 'Bandoulière amovible', 'Poche zippée', 'Ultra léger'],
      materials: ['Tissus recyclés', 'Boutons vintage', 'Fil de chanvre'],
      dimensions: '18cm x 15cm x 6cm'
    },
    {
      id: 4,
      name: 'Sac Week-end Aventure',
      description: 'Grand sac de voyage parfait pour les escapades du week-end.',
      longDescription: `Le Sac Week-end Aventure est votre compagnon idéal pour les escapades spontanées.
        Spacieux et robuste, il peut contenir tout ce dont vous avez besoin pour un week-end parfait.
        Fabriqué à partir de matériaux durables et recyclés, ce sac allie praticité et conscience environnementale.
        Ses multiples poches permettent une organisation optimale de vos affaires.`,
      price: 75,
      images: ['assets/sac.jpg', 'assets/sac.jpg', 'assets/sac.jpg'],
      features: ['Grande capacité', 'Poches multiples', 'Poignées renforcées', 'Base imperméable'],
      materials: ['Toile recyclée', 'Cuir récupéré', 'Doublure coton bio'],
      dimensions: '55cm x 30cm x 25cm'
    },
    {
      id: 5,
      name: 'Pochette Soirée Chic',
      description: 'Pochette élégante pour vos soirées spéciales.',
      longDescription: `La Pochette Soirée Chic est l'accessoire parfait pour sublimer vos tenues de soirée.
        Confectionnée avec des matériaux recyclés premium, elle apporte une touche d'élégance responsable à votre look.
        Son design raffiné cache un intérieur bien pensé avec plusieurs compartiments pour organiser vos essentiels.
        Une pièce unique qui prouve que luxe et durabilité peuvent aller de pair.`,
      price: 40,
      images: ['assets/sac.jpg', 'assets/sac.jpg', 'assets/sac.jpg'],
      features: ['Design élégant', 'Chaîne dorée amovible', 'Fermoir magnétique', 'Doublure satin'],
      materials: ['Velours recyclé', 'Chaîne vintage', 'Satin récupéré'],
      dimensions: '22cm x 12cm x 4cm'
    },
    {
      id: 6,
      name: 'Tote Bag Artiste',
      description: 'Tote bag spacieux avec motifs uniques peints à la main.',
      longDescription: `Le Tote Bag Artiste est une véritable œuvre d'art portable.
        Chaque sac est décoré de motifs uniques peints à la main par Miss Julie elle-même.
        Fabriqué à partir de toile de coton recyclé, ce sac est aussi durable que beau.
        Sa grande taille en fait le compagnon idéal pour vos courses, la plage ou simplement pour afficher votre style unique.`,
      price: 50,
      images: ['assets/sac.jpg', 'assets/sac.jpg', 'assets/sac.jpg'],
      features: ['Motifs peints à la main', 'Grande capacité', 'Lavable en machine', 'Anses longues'],
      materials: ['Toile coton recyclé', 'Peinture écologique', 'Fil de coton bio'],
      dimensions: '45cm x 40cm x 10cm'
    }
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}


