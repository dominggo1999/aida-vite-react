import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    overflow-hidden 
    rounded-3xl 
  `}
`;

export const CardTitle = styled.p`
  ${tw`
    text-white 
    font-poppins
  `}
`;

export const CardImageWrapper = styled.div`
  ${tw`
    relative
    w-full 
  `}

  width: 200px;
  height: 200px;
`;
