import { SectionTitle, TitleContainer } from "./styles";

type TitleProps = {
  children: React.ReactNode;
};

export function Title(props: TitleProps) {
  return (
    <TitleContainer>
      <SectionTitle>
        {props.children}
      </SectionTitle>
    </TitleContainer>
  )
}