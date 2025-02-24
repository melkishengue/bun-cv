import z from 'zod';

const socialSchema = z.object({
  name: z.string(),
  link: z.string(),
});

const BlockSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  organizationName: z.string(),
  timeInterval: z.string(),
  organizationCity: z.string(),
  remote: z.boolean(),
  activities: z.array(z.string()),
});

const TimedBlockSchema = z.object({
  blockTitle: z.string(),
  ignore: z.boolean().optional(),
  blocks: z.array(BlockSchema),
});

const skillsBlockSchema = z.object({
  blockTitle: z.string(),
  skills: z.array(z.string()),
});

const educationBlocksSchema = z.object({
  organizationName: z.string(),
  location: z.string(),
  timeInterval: z.string(),
  summary: z.string(),
  note: z.string().optional(),
  description: z.string(),
});

const CertificationBlocksSchema = z.object({
  title: z.string(),
  location: z.string(),
  timeInterval: z.string(),
  summary: z.string(),
  note: z.string().optional(),
  description: z.string(),
});

export const CVSchema = z.object({
  favicon: z.string(),
  profilePic: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  socials: z.array(socialSchema),
  profile: z.array(z.string()),
  timedBlocks: z.array(TimedBlockSchema),
  skillsBlocks: z.array(skillsBlockSchema),
  educationBlocks: z.array(educationBlocksSchema),
  certifications: z.array(CertificationBlocksSchema).optional(),
});

export type CVSchemaType = z.infer<typeof CVSchema>;

export const parseCVSchemaFromJson = (content: string): CVSchemaType => {
  return z
    .string()
    .transform((_, ctx) => {
      try {
        return JSON.parse(content);
      } catch (error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'invalid json',
        });
        return z.never;
      }
    })
    .pipe(CVSchema)
    .parse(content);
};
