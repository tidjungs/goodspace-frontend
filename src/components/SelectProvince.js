import React from 'react';
import { Select } from 'semantic-ui-react';
import provinces from '../constants/provinces';
const provincesFormat = provinces.map(p => ({ key: p.PROVINCE_NAME, value: p.PROVINCE_NAME, text: p.PROVINCE_NAME }))

export default ({ onChange }) => <Select placeholder='Select your province' options={provincesFormat} onChange={onChange} />
