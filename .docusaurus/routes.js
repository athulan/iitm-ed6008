
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/21st-century-mfg/blog',
    component: ComponentCreator('/21st-century-mfg/blog','146'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/archive',
    component: ComponentCreator('/21st-century-mfg/blog/archive','993'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/first-blog-post',
    component: ComponentCreator('/21st-century-mfg/blog/first-blog-post','802'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/long-blog-post',
    component: ComponentCreator('/21st-century-mfg/blog/long-blog-post','af4'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/mdx-blog-post',
    component: ComponentCreator('/21st-century-mfg/blog/mdx-blog-post','60c'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/tags',
    component: ComponentCreator('/21st-century-mfg/blog/tags','ba9'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/tags/docusaurus',
    component: ComponentCreator('/21st-century-mfg/blog/tags/docusaurus','2b3'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/tags/facebook',
    component: ComponentCreator('/21st-century-mfg/blog/tags/facebook','5cf'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/tags/hello',
    component: ComponentCreator('/21st-century-mfg/blog/tags/hello','2aa'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/tags/hola',
    component: ComponentCreator('/21st-century-mfg/blog/tags/hola','6d2'),
    exact: true
  },
  {
    path: '/21st-century-mfg/blog/welcome',
    component: ComponentCreator('/21st-century-mfg/blog/welcome','2b0'),
    exact: true
  },
  {
    path: '/21st-century-mfg/markdown-page',
    component: ComponentCreator('/21st-century-mfg/markdown-page','743'),
    exact: true
  },
  {
    path: '/21st-century-mfg/docs',
    component: ComponentCreator('/21st-century-mfg/docs','2b8'),
    routes: [
      {
        path: '/21st-century-mfg/docs/assignments/assignment-01',
        component: ComponentCreator('/21st-century-mfg/docs/assignments/assignment-01','19b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/assignments/assignment-02',
        component: ComponentCreator('/21st-century-mfg/docs/assignments/assignment-02','c5a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/intro',
        component: ComponentCreator('/21st-century-mfg/docs/intro','3e3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/lectures/lecture-01',
        component: ComponentCreator('/21st-century-mfg/docs/lectures/lecture-01','604'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/lectures/lecture-02',
        component: ComponentCreator('/21st-century-mfg/docs/lectures/lecture-02','f6b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/lectures/lecture-03',
        component: ComponentCreator('/21st-century-mfg/docs/lectures/lecture-03','848'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/lectures/lecture-04',
        component: ComponentCreator('/21st-century-mfg/docs/lectures/lecture-04','aaf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/lectures/lecture-05',
        component: ComponentCreator('/21st-century-mfg/docs/lectures/lecture-05','a5a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/21st-century-mfg/docs/lectures/lecture-06',
        component: ComponentCreator('/21st-century-mfg/docs/lectures/lecture-06','069'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/21st-century-mfg/',
    component: ComponentCreator('/21st-century-mfg/','db7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
