import { useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

export default function useDevice() {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();

    if (/tablet|ipad|playbook|silk/.test(result.device.type)) {
      setDevice('tablet');
    } else if (/mobi/.test(result.device.type)) {
      setDevice('mobile');
    } else {
      setDevice('desktop');
    }
  }, []);

  return device;
}
