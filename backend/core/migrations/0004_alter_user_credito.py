# Generated by Django 4.2 on 2023-04-29 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_rename_login_user_username_remove_user_groups_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='credito',
            field=models.BooleanField(blank=True, default=None, null=True),
        ),
    ]
