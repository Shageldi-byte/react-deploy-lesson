import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AnotherComp = () => {
    const theme = useSelector((state) => state.theme.value);
    const { t } = useTranslation();
    return (
        <div>
            <h1 style={{ color: theme }}>{t('hello')}</h1>
        </div>
    )
}

export default AnotherComp