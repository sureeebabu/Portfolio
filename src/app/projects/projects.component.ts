import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'ZRAI Service',
      company : 'ZF Rane Automotive India Private Limited',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.rane.jobcard',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.rane.jobcard',
      image: 'https://play-lh.googleusercontent.com/mzjWwYs8YQbTR5WI4rPo2V7EWJrNTBlIGO2sUYRa8cR8aBuMorq6VSjB837hQWx1_Bo=w240-h480-rw',
      store : 'AOS'
    },
    {
      name: 'Rane Group Product Catalogue',
      company : 'ZF Rane Geoup',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.ranegroup.prodcat',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.ranegroup.prodcat',
      image: 'https://play-lh.googleusercontent.com/5BnGdIp7pJ1T7dKoqSS_trmF1iVlYhFsYQDeqL-uJLfVLDAvvjbgEBpSH4rToByWePI=w240-h480-rw',
      store : 'AOS'
    },
    {
      name: 'Lucas Indian Catalog',
      company : 'Lucas',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.LIS.LucasIndianCatalog',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.LIS.LucasIndianCatalog',
      image: 'https://play-lh.googleusercontent.com/oYq8QBPphgG1_OfC9Oa4kp4SmCKAC7H2IJpHMDyCYqvYebvv_Ez7YPJa23jjgrx5jA=w240-h480-rw',
      store : 'both'
    },
    {
      name: 'LIS Battery Sales Registration',
      company : 'Lucas',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.lis.batterywarranty',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.lis.batterywarranty',
      image: 'https://play-lh.googleusercontent.com/oYq8QBPphgG1_OfC9Oa4kp4SmCKAC7H2IJpHMDyCYqvYebvv_Ez7YPJa23jjgrx5jA=w240-h480-rw',
      store : 'both'
    },
    {
      name: 'Lucas TVS Catalogue',
      company : 'Lucas TVS',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.ltvscatalogue',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.ltvscatalogue',
      image: 'https://play-lh.googleusercontent.com/TSbtQvTmnrgQynpz4dj-WY0bwB2BpcYoUJz09u2vbS-aXdzTe7QoCb67b40-ls0-Kg=w240-h480-rw',
      store : 'both'
    },
    {
      name: 'Sunland Intranet',
      company : 'Sunland',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.sunland.intranet',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.sunland.intranet',
      image: 'https://play-lh.googleusercontent.com/qMzLwO6GV7NAPIddE9Xtklvd4IgaSKbxfISgrt_T7Vu1fdRH_5ntwPWBVvoc7-t59MCB=w240-h480-rw',
      store : 'both'
    },
    {
      name: 'TEL Product Catalogue',
      company : 'TEL Turbo',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.newturbo.productcatlogue',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.newturbo.productcatlogue',
      image: 'https://play-lh.googleusercontent.com/NBLVdsOaBJnghQ8BNnPGSAvjBk_3KfjEawzdf7N6Pze_YMrvsoLuzUfGBhGB2IlBRA=w240-h480-rw',
      store : 'both'
    },
    {
      name: 'TEL Turbo Champions',
      company : 'TEL Turbo',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.TEL.couponmanagement',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.TEL.couponmanagement',
      image: 'https://play-lh.googleusercontent.com/7HSS1_copt3HYInAFm1mIhPkNqM87rMSSMXuPNc3HEhMlbDqawj8WMCVWAd4FiIW-Jrh=w240-h480-rw',
      store : 'AOS'
    },
    {
      name: 'TEL Customer Support',
      company : 'TEL Turbo',
      description: 'Description for project 1',
      aosLink: 'https://play.google.com/store/apps/details?id=com.TEL.fieldstaff',
      iOSLink: 'https://play.google.com/store/apps/details?id=com.TEL.fieldstaff',
      image: 'https://play-lh.googleusercontent.com/4BHcmh8HsIzkVQjtBgV1q3NCevbMsB4wPvUtC9sbfIKr3JlU-1-80BfzGnNNMEaA5y0=w240-h480-rw',
      store : 'AOS'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
