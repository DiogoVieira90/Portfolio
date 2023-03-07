import { LinkNav } from "./styles";
import { Link } from 'react-scroll';


type LinkProps = {
  children: React.ReactNode;
  id: number;
  active: boolean;
  target: string;
  offset: number;
  onClick: (id: number) => void;
};


export function NavLink(props: LinkProps) {


  return (
    <Link activeClass="active" to={props.target} spy={true} smooth={true} offset={props.offset} duration={500}>
      <LinkNav active={props.active} onClick={() => props.onClick(props.id)}>{props.children}</LinkNav>
    </Link>
  )
}