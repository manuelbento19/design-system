
import { styled } from './styles';

const Button = styled("button",{
    background: "$black",
    color: "$gray-100",
    padding: "$1",
    height: "$12",
    borderRadius: "$sm"
})

export default function App(){

    return(
        <Button>MyButton</Button>
    )
}