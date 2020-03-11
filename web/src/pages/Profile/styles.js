import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 100%;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background-color: rgba(0, 0, 0, 0.1);
            border: 0px;
            border-radius: 4px;
            height: 44px;
            padding: 0px 15px;
            color: #fff;
            margin: 0px 0px 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #fff;
            align-self: center;
            margin-bottom: 10px;
            font-weight: 700;
        }

        hr {
            border: 0px;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.2);
            margin: 10px 0px 20px;
        }

        button {
            margin: 5px 0px 0px;
            height: 44px;
            background-color: #3b9eff;
            font-weight: 700;
            color: #fff;
            border: 0px;
            border-radius: 4px;
            font-size: 16px;
            transition: background 250ms;

            &:hover {
                background-color: ${darken(0.03, '#3b9eff')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            transition: opacity 250ms;

            &:hover {
                opacity: 1;
            }
        }
    }

    > button {
        width: 100%;
        margin: 10px 0px 0px;
        height: 44px;
        background-color: #f64c75;
        font-weight: 700;
        color: #fff;
        border: 0px;
        border-radius: 4px;
        font-size: 16px;
        transition: background 250ms;

        &:hover {
            background-color: ${darken(0.08, '#f64c75')};
        }
    }
`;
