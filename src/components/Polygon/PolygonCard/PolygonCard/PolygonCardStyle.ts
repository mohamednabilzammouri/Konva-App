import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import { MyButton } from "../../../../Styles/Button";
import { colors } from "../../../../Styles/Colors";

export const StyledPolygonCard = styled(Card)`
    width: 20%;
    margin: 1em;
    background-color: #e6e8eb;


`
export const ExportToJsonButton = styled(MyButton)`
    color: white;
    background-color: ${colors.Blue};
    width: 50%;
    margin-Top: auto;
    &:hover{
        background-color: ${colors.Blue};
    }
`

export const CopyEditButton = styled(ExportToJsonButton)`
    margin-left: 1em;
    color: white;
    width: 100%;
    
`