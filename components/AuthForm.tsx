'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { optional, z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import React from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import FormField from './FormField';
import { useRouter } from 'next/navigation';

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  //added prop for signup/signin page
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === 'sign-up') {
        toast.success('Account created successfully');
        router.push('/sign-in');
      } else {
        toast.success('Logged In');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error('There was an error: ${error}');
    }
  }

  const isSignIn = type === 'sign-in'; //boolean varilable
  return (
    <div className='lg:min-w-[566px]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 w-full'
        >
          {!isSignIn && (
            <FormField
              control={form.control}
              name='name'
              label='Name'
              placeholder='John Pork'
            />
          )}
          <FormField
            control={form.control}
            name='email'
            label='Email'
            placeholder='user@gmail.com'
            type='email'
          />
          <FormField
            control={form.control}
            name='password'
            label='Password'
            type='password'
          />
          <Button type='submit' className='btn'>
            {isSignIn ? 'Sign in' : 'Create an Account'}
          </Button>
        </form>
      </Form>
      <p className='text-center mt-1'>
        {isSignIn ? 'No account yet?' : 'Already have an account?'}
        <Link
          href={!isSignIn ? '/sign-in' : '/sign-up'}
          className='font-bold text-user-primary ml-1'
        >
          <span className=' underline'>
            {' '}
            {!isSignIn ? 'Log in' : 'Sign up'}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
