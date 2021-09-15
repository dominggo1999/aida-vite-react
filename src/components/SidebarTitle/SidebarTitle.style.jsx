import tw, { styled } from 'twin.macro';

export const TitleWrapper = styled.div`
  ${tw`
    w-full
    py-5
    relative
  `}

  &::before{
    ${tw`
      absolute
      w-full 
      
    `}

    content: "";
  } 
`;

export const TitleText = styled.h5`
  ${tw`
    font-poppins
  `}
`;
