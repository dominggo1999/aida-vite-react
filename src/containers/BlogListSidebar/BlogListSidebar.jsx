import React from 'react';
import short from 'short-uuid';
import { SidebarWrapper, CategoriesWrapper } from './BlogListSidebar.style';
import AboutWriterCard from '../../components/AboutWriterCard/AboutWriterCard';
import CategoryCard2 from '../../components/CategoryCard2.js/CategoryCard2';
import SidebarTitle from '../../components/SidebarTitle/SidebarTitle';
import { categories } from '../../data/categories';

const popularCategories = categories.filter((i, id) => id < 4);

const BlogListSidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle title="About Me" />
      <AboutWriterCard />
      <SidebarTitle title="Popular Categories" />
      <CategoriesWrapper>
        {
        popularCategories && popularCategories.map((category) => {
          return (
            <CategoryCard2
              key={short.generate()}
              category={category}
            />
          );
        })
      }
      </CategoriesWrapper>
    </SidebarWrapper>
  );
};

export default BlogListSidebar;
