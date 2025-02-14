import type { Schema, Struct } from '@strapi/strapi';

export interface FeatureproductFeatureproduct extends Struct.ComponentSchema {
  collectionName: 'components_featureproduct_featureproducts';
  info: {
    displayName: 'Featureproduct';
  };
  attributes: {
    featureproduct_id: Schema.Attribute.Integer;
    featureproduct_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featureproduct_name: Schema.Attribute.String;
    featureproduct_quote: Schema.Attribute.Text;
  };
}

export interface GridsGrids extends Struct.ComponentSchema {
  collectionName: 'components_grids_grids';
  info: {
    displayName: 'grids';
  };
  attributes: {
    alt: Schema.Attribute.String;
    className: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'md:col-span-1'>;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HorizontalcategoryCardHorizontalcategoryCard
  extends Struct.ComponentSchema {
  collectionName: 'components_horizontalcategory_card_horizontalcategory_cards';
  info: {
    displayName: 'Horizontalcategory_card';
  };
  attributes: {
    ids: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface InfiniteScrollLogosInfiniteScrollLogos
  extends Struct.ComponentSchema {
  collectionName: 'components_infinite_scroll_logos_infinite_scroll_logos';
  info: {
    displayName: 'Infinite_scroll_logos';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LabelLabel extends Struct.ComponentSchema {
  collectionName: 'components_label_labels';
  info: {
    displayName: 'label';
  };
  attributes: {};
}

export interface ProductimageProductImage extends Struct.ComponentSchema {
  collectionName: 'components_productimage_product_images';
  info: {
    displayName: 'Product image';
  };
  attributes: {
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface StatisticStatistic extends Struct.ComponentSchema {
  collectionName: 'components_statistic_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    label: Schema.Attribute.String;
    target: Schema.Attribute.Integer;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    testimonial_author: Schema.Attribute.String;
    testimonial_id: Schema.Attribute.Integer;
    testimonial_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    testimonial_quote: Schema.Attribute.Text;
  };
}

export interface VideoCardVideoCard extends Struct.ComponentSchema {
  collectionName: 'components_video_card_video_cards';
  info: {
    displayName: 'Video-card';
  };
  attributes: {
    thumbnailUrl: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    videourl: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'featureproduct.featureproduct': FeatureproductFeatureproduct;
      'grids.grids': GridsGrids;
      'horizontalcategory-card.horizontalcategory-card': HorizontalcategoryCardHorizontalcategoryCard;
      'infinite-scroll-logos.infinite-scroll-logos': InfiniteScrollLogosInfiniteScrollLogos;
      'label.label': LabelLabel;
      'productimage.product-image': ProductimageProductImage;
      'statistic.statistic': StatisticStatistic;
      'testimonial.testimonial': TestimonialTestimonial;
      'video-card.video-card': VideoCardVideoCard;
    }
  }
}
