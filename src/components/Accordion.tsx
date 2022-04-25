import React, { PropsWithChildren, useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

interface AccordionProps {
	isOpen?: boolean;
	headerChildren: React.ReactNode;
	gradient?: keyof typeof colors.gradients;
}

export default function Accordion({
	children,
	isOpen,
	gradient,
	headerChildren,
	...rest
}: PropsWithChildren<AccordionProps>) {
	const [open, setOpen] = useState(isOpen);
	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);
	if (gradient) {
		return (
			<StyledAccordionWrappers gradient={gradient} {...rest}>
				<StyledAccordionWrapper>
					<AccordionHeader onClick={() => setOpen(!open)}>{headerChildren}</AccordionHeader>
					{open && <AccordionContent visible={open}>{children}</AccordionContent>}
				</StyledAccordionWrapper>
			</StyledAccordionWrappers>
		);
	} else {
		return (
			<StyledAccordionWrapper {...rest}>
				<AccordionHeader onClick={() => setOpen(!open)}>{headerChildren}</AccordionHeader>
				{open && <AccordionContent visible={open}>{children}</AccordionContent>}
			</StyledAccordionWrapper>
		);
	}
}

const StyledAccordionWrappers = styled.div<{ gradient?: keyof typeof colors.gradients }>`
	background: ${({ gradient }) => gradient && colors.gradients[gradient]};
	padding: 2px;
	border-radius: 5px;
	width: 100%;
	height: 100%;
	box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.25);
`;

const StyledAccordionWrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${colors.backgroundColor};
	box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
`;

const AccordionHeader = styled.div`
	cursor: pointer;
	width: 100%;
	height: 100%;
`;

const AccordionContent = styled.div<{ visible: boolean }>`
	width: 100%;
	height: 100%;
	animation: fade-in 300ms;

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
