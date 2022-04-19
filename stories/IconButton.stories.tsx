import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../src/components/IconButton';
import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'Icon Button',
	component: IconButton,
	decorators: [withDesign],
} as ComponentMeta<typeof IconButton>;

export const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

Template.args = {
	rounded: false,
	size: 'medium',
	active: false,
	children: (
		<>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8.99999 12.2741C7.19251 12.2741 5.72726 10.8088 5.72726 9.00125C5.72726 7.19369 7.19251 5.72837 8.99999 5.72837C10.8075 5.72837 12.2727 7.19369 12.2727 9.00125C12.2727 10.8088 10.8075 12.2741 8.99999 12.2741ZM10.6364 9.00125C10.6364 9.90503 9.90375 10.6377 9.00001 10.6377C8.09627 10.6377 7.36365 9.90503 7.36365 9.00125C7.36365 8.09747 8.09627 7.36481 9.00001 7.36481C9.90375 7.36481 10.6364 8.09747 10.6364 9.00125Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.0241 16.1626C14.2847 16.2352 14.5643 16.1618 14.7556 15.9704L15.9514 14.7746C16.1422 14.5838 16.2158 14.3053 16.1442 14.0452L15.6899 12.3946C15.6453 12.2328 15.6563 12.0607 15.7212 11.9059L15.8002 11.7172C15.8645 11.5635 15.9782 11.4356 16.1234 11.3537L17.6186 10.5099C17.8542 10.3769 18 10.1273 18 9.85671V8.16574C18 7.89594 17.8551 7.64692 17.6205 7.51363L16.1298 6.66651C15.9844 6.58387 15.8708 6.455 15.807 6.30037L15.7301 6.11397C15.6664 5.95935 15.6561 5.78785 15.701 5.62673L16.161 3.97527C16.2337 3.7144 16.1601 3.43461 15.9685 3.24326L14.7719 2.04831C14.5811 1.85784 14.3028 1.78438 14.0429 1.85589L12.392 2.31018C12.2301 2.35474 12.0579 2.34366 11.903 2.27872L11.7157 2.20019C11.5621 2.13579 11.4344 2.02212 11.3525 1.87708L10.5086 0.381445C10.3756 0.145768 10.126 0 9.85543 0H8.16454C7.89475 0 7.64575 0.144908 7.51246 0.379481L6.66538 1.87026C6.58274 2.01569 6.45387 2.12932 6.29925 2.19309L6.11316 2.26984C5.95846 2.33365 5.78686 2.34388 5.62568 2.29891L3.97457 1.8383C3.71383 1.76556 3.43412 1.83897 3.24271 2.03039L2.04859 3.22457C1.85785 3.41531 1.78424 3.69381 1.8558 3.9539L2.31008 5.60498C2.35463 5.7669 2.34355 5.93909 2.27862 6.09397L2.20008 6.28128C2.13569 6.43486 2.02202 6.56264 1.87699 6.64448L0.381427 7.48842C0.145762 7.6214 0 7.87103 0 8.14163V9.83255C0 10.102 0.144518 10.3507 0.378589 10.4842L1.86895 11.3337C2.01396 11.4164 2.12725 11.5451 2.19089 11.6994L2.26821 11.8869C2.33197 12.0415 2.34223 12.213 2.29735 12.3741L1.83732 14.0255C1.76471 14.2862 1.83814 14.5658 2.02948 14.7572L3.22442 15.9521C3.41516 16.1429 3.69364 16.2165 3.95372 16.1449L5.60472 15.6906C5.76664 15.6461 5.93882 15.6572 6.09369 15.7221L6.28114 15.8007C6.43467 15.8651 6.56241 15.9787 6.64425 16.1237L7.48815 17.6187C7.62115 17.8543 7.87072 18 8.14127 18H9.83211C10.1016 18 10.3504 17.8554 10.4838 17.6212L11.3325 16.1311C11.4152 15.986 11.5439 15.8726 11.6983 15.8089L11.8855 15.7317C12.0401 15.6679 12.2116 15.6577 12.3727 15.7025L14.0241 16.1626ZM14.8307 10.205C14.6855 10.2869 14.5718 10.4148 14.5074 10.5685L13.9935 11.796C13.9287 11.9509 13.9177 12.1229 13.9622 12.2848L14.3425 13.6665C14.3964 13.8622 14.341 14.0717 14.1975 14.2151C14.0536 14.3591 13.8433 14.4143 13.6472 14.3597L12.2694 13.9758C12.1083 13.931 11.9368 13.9412 11.7822 14.005L10.5547 14.5113C10.4003 14.5749 10.2716 14.6883 10.1889 14.8334L9.47945 16.0791C9.37898 16.2555 9.19159 16.3644 8.98858 16.3644C8.78481 16.3644 8.59682 16.2546 8.49664 16.0772L7.7938 14.8321C7.71196 14.6871 7.58421 14.5734 7.43068 14.5091L6.20489 13.9951C6.05002 13.9301 5.87783 13.9191 5.71592 13.9636L4.33281 14.3442C4.1375 14.3979 3.92838 14.3427 3.78515 14.1994C3.64146 14.0557 3.58632 13.8458 3.64085 13.65L4.02483 12.2716C4.06971 12.1105 4.05945 11.939 3.99569 11.7844L3.48943 10.5568C3.4258 10.4025 3.3125 10.2738 3.1675 10.1911L1.9216 9.48093C1.74526 9.38041 1.63639 9.19302 1.63639 8.99003C1.63639 8.78617 1.7462 8.59811 1.92374 8.49792L3.16936 7.79503C3.31439 7.71319 3.42806 7.58541 3.49245 7.43183L4.00641 6.20598C4.07134 6.0511 4.08242 5.8789 4.03787 5.71698L3.6571 4.33308C3.60349 4.13822 3.65864 3.92957 3.80155 3.78665C3.94496 3.64324 4.15452 3.58823 4.34987 3.64273L5.72872 4.0274C5.88991 4.07236 6.0615 4.06213 6.2162 3.99833L7.44377 3.49203C7.5984 3.42825 7.72726 3.31462 7.8099 3.1692L8.51823 1.92261C8.61845 1.74623 8.80568 1.63726 9.00855 1.63726C9.21202 1.63726 9.39972 1.74687 9.49971 1.92409L10.2029 3.1703C10.2847 3.31534 10.4125 3.42901 10.5661 3.49341L11.7919 4.00739C11.9467 4.07233 12.1189 4.08341 12.2808 4.03886L13.664 3.65825C13.8595 3.60445 14.0689 3.65971 14.2124 3.803C14.3565 3.94694 14.4119 4.15742 14.3572 4.35367L13.9736 5.73088C13.9287 5.892 13.9389 6.0635 14.0027 6.21812L14.509 7.44574C14.5728 7.60037 14.6864 7.72925 14.8318 7.81188L16.0783 8.52024C16.2547 8.62047 16.3637 8.80771 16.3637 9.01059C16.3637 9.21407 16.2541 9.40177 16.0769 9.50177L14.8307 10.205Z"
					fill="white"
				/>
			</svg>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8.99999 12.2741C7.19251 12.2741 5.72726 10.8088 5.72726 9.00125C5.72726 7.19369 7.19251 5.72837 8.99999 5.72837C10.8075 5.72837 12.2727 7.19369 12.2727 9.00125C12.2727 10.8088 10.8075 12.2741 8.99999 12.2741ZM10.6364 9.00125C10.6364 9.90503 9.90375 10.6377 9.00001 10.6377C8.09627 10.6377 7.36365 9.90503 7.36365 9.00125C7.36365 8.09747 8.09627 7.36481 9.00001 7.36481C9.90375 7.36481 10.6364 8.09747 10.6364 9.00125Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.0241 16.1626C14.2847 16.2352 14.5643 16.1618 14.7556 15.9704L15.9514 14.7746C16.1422 14.5838 16.2158 14.3053 16.1442 14.0452L15.6899 12.3946C15.6453 12.2328 15.6563 12.0607 15.7212 11.9059L15.8002 11.7172C15.8645 11.5635 15.9782 11.4356 16.1234 11.3537L17.6186 10.5099C17.8542 10.3769 18 10.1273 18 9.85671V8.16574C18 7.89594 17.8551 7.64692 17.6205 7.51363L16.1298 6.66651C15.9844 6.58387 15.8708 6.455 15.807 6.30037L15.7301 6.11397C15.6664 5.95935 15.6561 5.78785 15.701 5.62673L16.161 3.97527C16.2337 3.7144 16.1601 3.43461 15.9685 3.24326L14.7719 2.04831C14.5811 1.85784 14.3028 1.78438 14.0429 1.85589L12.392 2.31018C12.2301 2.35474 12.0579 2.34366 11.903 2.27872L11.7157 2.20019C11.5621 2.13579 11.4344 2.02212 11.3525 1.87708L10.5086 0.381445C10.3756 0.145768 10.126 0 9.85543 0H8.16454C7.89475 0 7.64575 0.144908 7.51246 0.379481L6.66538 1.87026C6.58274 2.01569 6.45387 2.12932 6.29925 2.19309L6.11316 2.26984C5.95846 2.33365 5.78686 2.34388 5.62568 2.29891L3.97457 1.8383C3.71383 1.76556 3.43412 1.83897 3.24271 2.03039L2.04859 3.22457C1.85785 3.41531 1.78424 3.69381 1.8558 3.9539L2.31008 5.60498C2.35463 5.7669 2.34355 5.93909 2.27862 6.09397L2.20008 6.28128C2.13569 6.43486 2.02202 6.56264 1.87699 6.64448L0.381427 7.48842C0.145762 7.6214 0 7.87103 0 8.14163V9.83255C0 10.102 0.144518 10.3507 0.378589 10.4842L1.86895 11.3337C2.01396 11.4164 2.12725 11.5451 2.19089 11.6994L2.26821 11.8869C2.33197 12.0415 2.34223 12.213 2.29735 12.3741L1.83732 14.0255C1.76471 14.2862 1.83814 14.5658 2.02948 14.7572L3.22442 15.9521C3.41516 16.1429 3.69364 16.2165 3.95372 16.1449L5.60472 15.6906C5.76664 15.6461 5.93882 15.6572 6.09369 15.7221L6.28114 15.8007C6.43467 15.8651 6.56241 15.9787 6.64425 16.1237L7.48815 17.6187C7.62115 17.8543 7.87072 18 8.14127 18H9.83211C10.1016 18 10.3504 17.8554 10.4838 17.6212L11.3325 16.1311C11.4152 15.986 11.5439 15.8726 11.6983 15.8089L11.8855 15.7317C12.0401 15.6679 12.2116 15.6577 12.3727 15.7025L14.0241 16.1626ZM14.8307 10.205C14.6855 10.2869 14.5718 10.4148 14.5074 10.5685L13.9935 11.796C13.9287 11.9509 13.9177 12.1229 13.9622 12.2848L14.3425 13.6665C14.3964 13.8622 14.341 14.0717 14.1975 14.2151C14.0536 14.3591 13.8433 14.4143 13.6472 14.3597L12.2694 13.9758C12.1083 13.931 11.9368 13.9412 11.7822 14.005L10.5547 14.5113C10.4003 14.5749 10.2716 14.6883 10.1889 14.8334L9.47945 16.0791C9.37898 16.2555 9.19159 16.3644 8.98858 16.3644C8.78481 16.3644 8.59682 16.2546 8.49664 16.0772L7.7938 14.8321C7.71196 14.6871 7.58421 14.5734 7.43068 14.5091L6.20489 13.9951C6.05002 13.9301 5.87783 13.9191 5.71592 13.9636L4.33281 14.3442C4.1375 14.3979 3.92838 14.3427 3.78515 14.1994C3.64146 14.0557 3.58632 13.8458 3.64085 13.65L4.02483 12.2716C4.06971 12.1105 4.05945 11.939 3.99569 11.7844L3.48943 10.5568C3.4258 10.4025 3.3125 10.2738 3.1675 10.1911L1.9216 9.48093C1.74526 9.38041 1.63639 9.19302 1.63639 8.99003C1.63639 8.78617 1.7462 8.59811 1.92374 8.49792L3.16936 7.79503C3.31439 7.71319 3.42806 7.58541 3.49245 7.43183L4.00641 6.20598C4.07134 6.0511 4.08242 5.8789 4.03787 5.71698L3.6571 4.33308C3.60349 4.13822 3.65864 3.92957 3.80155 3.78665C3.94496 3.64324 4.15452 3.58823 4.34987 3.64273L5.72872 4.0274C5.88991 4.07236 6.0615 4.06213 6.2162 3.99833L7.44377 3.49203C7.5984 3.42825 7.72726 3.31462 7.8099 3.1692L8.51823 1.92261C8.61845 1.74623 8.80568 1.63726 9.00855 1.63726C9.21202 1.63726 9.39972 1.74687 9.49971 1.92409L10.2029 3.1703C10.2847 3.31534 10.4125 3.42901 10.5661 3.49341L11.7919 4.00739C11.9467 4.07233 12.1189 4.08341 12.2808 4.03886L13.664 3.65825C13.8595 3.60445 14.0689 3.65971 14.2124 3.803C14.3565 3.94694 14.4119 4.15742 14.3572 4.35367L13.9736 5.73088C13.9287 5.892 13.9389 6.0635 14.0027 6.21812L14.509 7.44574C14.5728 7.60037 14.6864 7.72925 14.8318 7.81188L16.0783 8.52024C16.2547 8.62047 16.3637 8.80771 16.3637 9.01059C16.3637 9.21407 16.2541 9.40177 16.0769 9.50177L14.8307 10.205Z"
					fill="white"
				/>
			</svg>
		</>
	),
};

Template.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/zeCepPb3Bo6Fd92FdcolUT/v1.0?node-id=918%3A31255',
	},
};
