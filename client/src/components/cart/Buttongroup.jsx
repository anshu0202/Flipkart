
import {ButtonGroup, Button, styled} from "@mui/material"


const Component= styled(ButtonGroup)`
 margin-top:30px;

`
const StyledButton= styled(Button)`
 border-radius: 50%;
`


const GroupedButton=()=>{
    return (
        <ButtonGroup>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>

        </ButtonGroup>
    )
}

export default GroupedButton