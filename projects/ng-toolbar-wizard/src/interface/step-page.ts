export interface StepPage {
    step: number;
    pagePath: string;
    nextStep?: (val: any) => void;
    prevStep?: (val: any) => void;
}
