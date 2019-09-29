import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';

export const CenteredDiv = styled.div`
    text-align: center;
    color: red;
    font-size: 30px;
    background-color: ${props => props.isSelected ? 'green' : 'blue'};
    button{
        
    }
`;


export const StyledListItem = styled(ListGroupItem)`
    marginTop: 10px;
`;
