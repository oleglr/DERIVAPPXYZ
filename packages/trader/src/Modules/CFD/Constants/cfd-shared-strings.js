import { CFD_PLATFORMS } from '@deriv/shared';
import { localize } from '@deriv/translations';

export const general_messages = {
    getWelcomeHeader: (is_logged_in, platform) => {
        if (platform === CFD_PLATFORMS.DXTRADE) {
            if (is_logged_in) return localize('Welcome to your Deriv X dashboard');
            return localize('Welcome to Deriv X');
        } else if (platform === CFD_PLATFORMS.MT5) {
            if (is_logged_in) return localize('Welcome to your Deriv MT5 (DMT5) dashboard');
            return localize('Welcome to Deriv MT5 (DMT5) dashboard');
        }
        return localize('');
    },
    getDownloadHeader: platform => {
        if (platform === CFD_PLATFORMS.DXTRADE)
            return localize('Run Deriv X on your browser or download the mobile app');
        else if (platform === CFD_PLATFORMS.MT5)
            return localize('Run MT5 from your browser or download the MT5 app for your devices');
        return '';
    },
    getFinancialAccountDescriptor: (platform, is_eu) => {
        if (platform === CFD_PLATFORMS.DXTRADE) {
            return localize('Trade forex, commodities and cryptocurrencies at high leverage.');
        } else if (platform === CFD_PLATFORMS.MT5) {
            if (is_eu) {
                return localize(
                    'Trade major (standard and micro-lots) and minor currency pairs, stocks, stock indices, commodities, and cryptocurrencies.'
                );
            }
            return localize(
                'Trade major (standard and micro-lots) and minor currency pairs, stocks, stock indices, commodities, and cryptocurrencies with high leverage.'
            );
        }
        return '';
    },
};
