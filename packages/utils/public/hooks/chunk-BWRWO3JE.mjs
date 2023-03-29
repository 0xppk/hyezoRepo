import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

function m({schema:e,...o}){return useForm({...o,resolver:zodResolver(e)})}

export { m as a };
