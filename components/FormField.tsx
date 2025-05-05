import React from "react";

const FormField = () => (
  <FormField
    control={form.control}
    name='username'
    render={({ field }) => (
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input placeholder='John Pork' {...field} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
