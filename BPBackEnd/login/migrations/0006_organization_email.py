# Generated by Django 3.0.6 on 2020-06-30 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0005_remove_organization_director'),
    ]

    operations = [
        migrations.AddField(
            model_name='organization',
            name='email',
            field=models.EmailField(default='smithz16@ferris.edu', max_length=254, verbose_name='email address'),
            preserve_default=False,
        ),
    ]