import React from 'react';
import { SidebarWrapper } from './BlogListSidebar.style';
import AboutWriterCard from '../../components/AboutWriterCard/AboutWriterCard';
import CategoryCard2 from '../../components/CategoryCard2.js/CategoryCard2';
import SidebarTitle from '../../components/SidebarTitle/SidebarTitle';

const BlogListSidebar = () => {
  return (
    <SidebarWrapper>
      <AboutWriterCard />
    </SidebarWrapper>
  );
};

export default BlogListSidebar;
