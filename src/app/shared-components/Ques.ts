import { ArrayType } from "@angular/compiler/src/output/output_ast";

export interface Ques {
    question: string;
    options: ArrayType;
    answer: string;
}