/**
 * Chilean phone number mask definition for IMask.
 *
 * @summary Phone number mask for IMask.
 * @author Alvear Candia, Cristopher Alejandro <caalvearc@achs.cl>
 *
 * Created at     : 2020-05-24 10:56:49
 * Last modified  : 2020-05-31 15:20:17
 */

import IMask from 'imask';

// mask.
const Mask = {
    simple: {
        overwrite: true,
        autofix: true,
        mask: '+{56}{ }000000000'
    },
    advanced: {
        mask: [
            {
                mask: '{+56}{ }{2}{ }0000{ }0000',
                type: 'landline metropolitan'
            },
            {
                mask: '{+56}{ }{9}{ }0000{ }0000',
                type: 'mobile'
            },
            {
                mask: '{+56}{ }{00}{ }000{ }0000',
                type: 'landline'
            }
        ],
        dispatch(appended, dynamicMasked)
        {
            if (dynamicMasked.value.length > 4)
                return dynamicMasked.currentMask;

            switch (appended)
            {
                case '2':
                    return dynamicMasked.compiledMasks
                        .find((m) => m.type === 'landline metropolitan');

                case '9':
                    return dynamicMasked.compiledMasks
                        .find((m) => m.type === 'mobile');

                default:
                    return dynamicMasked.compiledMasks
                        .find((m) => m.type === 'landline');
            }
        }
    }
};

// formatters for use manually.
const Pipes = {
    simple: IMask.createPipe(Mask.simple),
    advanced: IMask.createPipe(Mask.advanced)
};

export default Mask;

export {
    Pipes
};
