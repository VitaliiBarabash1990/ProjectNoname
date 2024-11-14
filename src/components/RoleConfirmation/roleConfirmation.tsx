'use client';

import { useState } from 'react';
import cn from 'classnames';
import { useRouter } from '@/i18n/routing';
import RoleList from './roleList';
import { AppRouteEnum } from '@/libs/enums/enums';
import { useSetRoleMutation } from '@/services/auth-and-user-services';
import { customError } from '@/types/commonTypes';
import { rolesValidationSchema } from '../../validation/rolesValidation';

import DynamicForm from '@/components/UI/Forms/DynamicForm/DynamicForm';
import Button from '@/components/UI/Button/Button';

import s from './roleConfirmation.module.scss';
import { useTranslations } from 'next-intl';
import { Roles } from '@/libs/enums/app/Role';

const RoleConfirmation = () => {
  const [setRole, { isLoading }] = useSetRoleMutation();
  const router = useRouter();
  const [backendError, setBackendError] = useState<string | null>(null);

  const handleSubmit = async (values: { role: string }) => {
    try {
      setBackendError(null);
      await setRole({ role: [values.role] }).unwrap();
      router.push(`${AppRouteEnum.ACCOUNT_VERIFICATION}/${values.role}`);
    } catch (e) {
      const customError = e as customError;
      if (customError.status === 404) {
        setBackendError('Користувача не знайдено');
      } else if (customError.status === 401) {
        setBackendError('Користувач не авторизований');
      } else if (customError.status === 403) {
        setBackendError('Користувач не має достатньо прав');
      }
    }
  };

  const t = useTranslations('roleCardData');

  const roleCardData = [
    {
      id: 1,
      role: Roles.JUNIOR,
      title: t('0.title'),
      properties: [
        { id: 1, text: t('0.properties.0.text') },
        { id: 2, text: t('0.properties.1.text') },
        { id: 3, text: t('0.properties.2.text') },
        { id: 4, text: t('0.properties.3.text') },
        { id: 5, text: t('0.properties.4.text') },
        { id: 6, text: t('0.properties.5.text') },
        { id: 7, text: t('0.properties.6.text') },
        { id: 8, text: t('0.properties.7.text') },
      ],
    },

    {
      id: 2,
      role: Roles.MENTOR,
      title: t('1.title'),
      properties: [
        { id: 1, text: t('1.properties.0.text') },
        { id: 2, text: t('1.properties.1.text') },
        { id: 3, text: t('1.properties.2.text') },
        { id: 4, text: t('1.properties.3.text') },
        { id: 5, text: t('1.properties.4.text') },
        { id: 6, text: t('1.properties.5.text') },
        { id: 7, text: t('1.properties.6.text') },
        { id: 8, text: t('1.properties.7.text') },
        { id: 9, text: t('1.properties.8.text') },
      ],
    },
    {
      id: 3,
      role: Roles.INVESTOR,
      title: t('2.title'),
      properties: [
        { id: 1, text: t('2.properties.0.text') },
        { id: 2, text: t('2.properties.1.text') },
        { id: 3, text: t('2.properties.2.text') },
        { id: 4, text: t('2.properties.3.text') },
        { id: 5, text: t('2.properties.4.text') },
        { id: 6, text: t('2.properties.5.text') },
      ],
    },

    {
      id: 4,
      role: Roles.PARTNER,
      title: t('3.title'),
      properties: [
        { id: 1, text: t('3.properties.0.text') },
        { id: 2, text: t('3.properties.1.text') },
        { id: 3, text: t('3.properties.2.text') },
        { id: 4, text: t('3.properties.3.text') },
        { id: 5, text: t('3.properties.4.text') },
      ],
    },
  ];
  console.log(roleCardData);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <DynamicForm
          initialValues={{ role: '' }}
          validationSchema={rolesValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <>
              <RoleList
                roles={roleCardData}
                onSelectRole={(roleId) => {
                  setFieldValue('role', roleId);
                  console.log('Selected role:', roleId);
                }}
              />
              <div className={s.button__wrapper}>
                <Button
                  title="Вибрати"
                  type="submit"
                  className={cn(s.button, { [s.disabled]: isLoading })}
                  isDisabled={isLoading}
                />
              </div>

              {errors.role && touched.role && (
                <div className={s.error}>
                  {typeof errors.role === 'string' && errors.role}
                </div>
              )}
              {backendError && <div className={s.error}>{backendError}</div>}
            </>
          )}
        </DynamicForm>
      </div>
    </section>
  );
};

export default RoleConfirmation;
