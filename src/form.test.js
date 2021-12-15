import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Form from './form';
/**
 * Functional test cases for form component
 * Author : Vinit Joshi
 */
describe("form component", () => {
    it("valid firstName", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput1")
            const inputWord = 'first'
            await fireEvent.change(input,{target: {value: inputWord }})
            expect(input.value).toBe('first')  //first name input
            expect(input.value.length).toBeGreaterThan(2) //first name min 3 characters
            expect(input.value.length).toBeLessThan(31) //first name max 30 characters
        })
    })
    it("valid lastName", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput2")
            const inputWord = 'last'
            await fireEvent.change(input,{target: {value: inputWord }})
            expect(input.value).toBe('last') //last name input
            expect(input.value.length).toBeGreaterThan(2) //last name min 3 characters
            expect(input.value.length).toBeLessThan(31) //last name max 30 characters
        })
    })
    it("valid Email", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput3")
            const inputWord = 'first@gmail.com'
            await fireEvent.change(input,{target: {value: inputWord }})
            const matchWithRegex = /^[a-z_0-9]{2,24}@[a-z]{2,10}[\.][a-z]{2,3}$/
            expect(input.value).toMatch(matchWithRegex) // valid email regex check
        })
    })
    it("valid Password", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput4")
            const inputWord = 'aB1234'
            await fireEvent.change(input,{target: {value: inputWord }})
            const matchWithRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,15}$/
            expect(input.value).toMatch(matchWithRegex) //valid password regex check
        })
    })
})