import { useState } from 'react';
import { BsChevronBarDown, BsChevronBarUp } from 'react-icons/bs';
import './AnimationIcon.css'; // Make sure to create this CSS file
import { Button, MenuTrigger } from '@chakra-ui/react';

interface Props {
    value: string;
    Sort: string
}



const ArrowUpDown = ({value,Sort}:Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  return (
    <MenuTrigger asChild>
        <Button variant={'outline'} size="sm" onClick={handleClick}>
            {value || Sort}
            {isOpen ? <BsChevronBarUp className="icon-animation" /> : <BsChevronBarDown className="icon-animation" />}
        </Button>
    </MenuTrigger>
  )
}

export default ArrowUpDown;