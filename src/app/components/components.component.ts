import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { ImageService } from '../stateful-components/image-search/image.service';
import { StatisticsConfig } from '../stateful-components/statistics/stastistics.interface';

const images = {
  page: 1,
  per_page: 15,
  photos: [
    {
      id: 1047051,
      width: 4000,
      height: 5000,
      url: 'https://www.pexels.com/photo/man-standing-on-brown-rock-cliff-in-front-of-waterfalls-photography-1047051/',
      photographer: 'Oliver Sjöström',
      photographer_url: 'https://www.pexels.com/@ollivves',
      photographer_id: 333270,
      avg_color: '#586363',
      src: {
        original:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg',
        large2x:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Man Standing on Brown Rock Cliff in Front of Waterfalls Photography',
    },
    {
      id: 7177726,
      width: 3897,
      height: 5846,
      url: 'https://www.pexels.com/photo/nature-person-water-girl-7177726/',
      photographer: 'Los Muertos Crew',
      photographer_url: 'https://www.pexels.com/@cristian-rojas',
      photographer_id: 11924337,
      avg_color: '#5F6958',
      src: {
        original:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg',
        large2x:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/7177726/pexels-photo-7177726.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Free stock photo of bare footed, cascade, creek',
    },
    {
      id: 1122411,
      width: 3688,
      height: 5532,
      url: 'https://www.pexels.com/photo/man-wearing-gray-shirt-walking-near-waterfalls-1122411/',
      photographer: 'Oliver Sjöström',
      photographer_url: 'https://www.pexels.com/@ollivves',
      photographer_id: 333270,
      avg_color: '#394345',
      src: {
        original:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg',
        large2x:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Man Wearing Gray Shirt Walking Near Waterfalls',
    },
    {
      id: 2166608,
      width: 6000,
      height: 4000,
      url: 'https://www.pexels.com/photo/woman-standing-in-front-of-flowing-water-2166608/',
      photographer: 'Oleksandr Pidvalnyi',
      photographer_url: 'https://www.pexels.com/@freestockpro',
      photographer_id: 100512,
      avg_color: '#5C5E57',
      src: {
        original:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg',
        large2x:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2166608/pexels-photo-2166608.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Woman Standing in Front of Flowing Water',
    },
    {
      id: 2406384,
      width: 1920,
      height: 2560,
      url: 'https://www.pexels.com/photo/photo-of-person-standing-near-waterfalls-2406384/',
      photographer: 'Avery Nielsen-Webb',
      photographer_url: 'https://www.pexels.com/@webbshow',
      photographer_id: 1263709,
      avg_color: '#40423E',
      src: {
        original:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg',
        large2x:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2406384/pexels-photo-2406384.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Photo of Person Standing Near Waterfalls',
    },
    {
      id: 11568859,
      width: 4000,
      height: 6000,
      url: 'https://www.pexels.com/photo/person-standing-on-rock-under-huge-waterfall-11568859/',
      photographer: 'Abraham',
      photographer_url: 'https://www.pexels.com/@abraham-191284090',
      photographer_id: 191284090,
      avg_color: '#475A5E',
      src: {
        original:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg',
        large2x:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/11568859/pexels-photo-11568859.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Person Standing on Rock Under Huge Waterfall',
    },
    {
      id: 1816237,
      width: 4000,
      height: 6000,
      url: 'https://www.pexels.com/photo/photo-of-people-near-waterfall-1816237/',
      photographer: 'Zachary DeBottis',
      photographer_url: 'https://www.pexels.com/@zachtheshooter',
      photographer_id: 861258,
      avg_color: '#A9A39E',
      src: {
        original:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg',
        large2x:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/1816237/pexels-photo-1816237.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Photo of People Near Waterfall',
    },
    {
      id: 11693636,
      width: 4640,
      height: 6960,
      url: 'https://www.pexels.com/photo/people-enjoying-magnificent-view-of-turquoise-lake-and-waterfall-11693636/',
      photographer: 'Ali  Alcántara',
      photographer_url: 'https://www.pexels.com/@ali-alcantara-177885845',
      photographer_id: 177885845,
      avg_color: '#616D5F',
      src: {
        original:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg',
        large2x:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/11693636/pexels-photo-11693636.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'People Enjoying Magnificent View of Turquoise Lake and Waterfall',
    },
    {
      id: 2405639,
      width: 3024,
      height: 3780,
      url: 'https://www.pexels.com/photo/man-diving-at-water-under-green-trees-2405639/',
      photographer: 'Jondave Libiran',
      photographer_url: 'https://www.pexels.com/@jondave-libiran-1263568',
      photographer_id: 1263568,
      avg_color: '#505148',
      src: {
        original:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg',
        large2x:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2405639/pexels-photo-2405639.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Man Diving at Water Under Green Trees',
    },
    {
      id: 2557527,
      width: 1696,
      height: 2560,
      url: 'https://www.pexels.com/photo/time-lapse-photography-of-flowing-waterfall-2557527/',
      photographer: 'Chris Czermak',
      photographer_url: 'https://www.pexels.com/@chris-czermak-1280625',
      photographer_id: 1280625,
      avg_color: '#869AA8',
      src: {
        original:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg',
        large2x:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2557527/pexels-photo-2557527.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Time Lapse Photography of Flowing Waterfall',
    },
    {
      id: 3608619,
      width: 4000,
      height: 6000,
      url: 'https://www.pexels.com/photo/white-short-coated-dog-on-brown-wooden-dock-near-waterfalls-3608619/',
      photographer: 'Aleksey Kuprikov',
      photographer_url: 'https://www.pexels.com/@aleksey-kuprikov-1883853',
      photographer_id: 1883853,
      avg_color: '#454A42',
      src: {
        original:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg',
        large2x:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/3608619/pexels-photo-3608619.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'White Short Coated Dog on Brown Wooden Dock Near Waterfalls',
    },
    {
      id: 3666829,
      width: 4000,
      height: 6000,
      url: 'https://www.pexels.com/photo/man-and-woman-kissing-3666829/',
      photographer: 'Mateusz Dach',
      photographer_url: 'https://www.pexels.com/@mateusz-dach-99805',
      photographer_id: 99805,
      avg_color: '#3C475A',
      src: {
        original:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg',
        large2x:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/3666829/pexels-photo-3666829.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Man and Woman Kissing',
    },
    {
      id: 1822463,
      width: 3024,
      height: 4032,
      url: 'https://www.pexels.com/photo/photo-of-person-with-backpack-1822463/',
      photographer: 'Suliman Sallehi',
      photographer_url: 'https://www.pexels.com/@sulimansallehi',
      photographer_id: 218279,
      avg_color: '#4E4C4B',
      src: {
        original:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg',
        large2x:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/1822463/pexels-photo-1822463.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Photo of Person With Backpack',
    },
    {
      id: 3551199,
      width: 4032,
      height: 3024,
      url: 'https://www.pexels.com/photo/man-in-white-shirt-on-black-rock-in-front-of-waterfalls-3551199/',
      photographer: 'Aleksey Kuprikov',
      photographer_url: 'https://www.pexels.com/@aleksey-kuprikov-1883853',
      photographer_id: 1883853,
      avg_color: '#4A4F4E',
      src: {
        original:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg',
        large2x:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/3551199/pexels-photo-3551199.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Man in White Shirt on Black Rock in Front of Waterfalls',
    },
    {
      id: 1058957,
      width: 3024,
      height: 4032,
      url: 'https://www.pexels.com/photo/photography-of-man-wearing-bubble-hoodie-jacket-near-waterfalls-1058957/',
      photographer: 'nappy',
      photographer_url: 'https://www.pexels.com/@nappy',
      photographer_id: 330064,
      avg_color: '#7B7D80',
      src: {
        original:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg',
        large2x:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/1058957/pexels-photo-1058957.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Photography of Man Wearing Bubble Hoodie Jacket Near Waterfalls',
    },
  ],
  total_results: 8000,
  next_page:
    'https://api.pexels.com/v1/search/?page=2&per_page=15&query=waterfall+people',
};

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  buttonLoading: boolean = false;
  images = images.photos;

  stats: StatisticsConfig[] = [
    { label: 'Strength', abilityScore: 4 },
    { label: 'Dexterity', abilityScore: 20 },
    { label: 'Constitution', abilityScore: 9 },
    { label: 'Intelligence', abilityScore: 11 },
    { label: 'Wisdom', abilityScore: 3 },
    { label: 'Charisma', abilityScore: 16 },
  ];
  constructor(private image: ImageService, private http: ApiService) {}

  ngOnInit(): void {}

  onClick() {
    this.image
      .searchArtStationProxy(['waterfall', 'person'])
      .subscribe((data) => {
        console.log(data);
        this.buttonLoading = false;
      });
    this.buttonLoading = true;
  }
}
