import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100vh;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

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
`;
