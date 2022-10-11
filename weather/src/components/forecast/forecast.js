import { 
    Accordion, 
    AccordionItemHeading,
    AccordionItem,
    AccordionItemPanel,
} from "react-accessible-accordion";

const Forecast = ({data}) =>{
    return 
    <>
       <label className="title">Daitly</label> 
       <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
                <AccordionItemHeading>
                    
                </AccordionItemHeading>
            </AccordionItem>
        ))}
       </Accordion>

    </>;
}

export default Forecast;