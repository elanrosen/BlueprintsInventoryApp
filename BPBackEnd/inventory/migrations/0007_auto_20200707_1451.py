# Generated by Django 3.0.6 on 2020-07-07 18:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0006_auto_20200707_1446'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supply',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='inventory.Category'),
        ),
    ]
