<script>
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import IconBrandGithub from '$lib/icons/icon-brand-github.svelte';
	import IconBrandLinkedin from '$lib/icons/icon-brand-linkedin.svelte';
	import { t } from '$lib/stores/i18n';
</script>

<div
	class="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between my-10 mx-8 border-t border-slate-400/25 pt-10"
>
	<div class="flex flex-col justify-start items-start">
		<img
			class="h-14 -ml-1"
			src={`${PUBLIC_IMAGE_SERVER}/uploads/logo_flat_transparent_873aba95ff.svg`}
			alt=""
		/>
		<div class="tracking-tight mt-2 text-slate-700/90 font-semibold text-lg">
			K7-Konzept Karlsruhe GmbH
		</div>
		<div class="text-sm text-slate-500">Roonstraße 23a, 76137 Karlsruhe</div>
		<div class="text-xs text-slate-500">
			&copy; 2022-{new Date().getFullYear()}
		</div>
	</div>
	<div class="flex flex-col lg:flex-row justify-end gap-3 lg:gap-8">
		<div class="flex flex-col gap-3">
			<div class="text-slate-900 font-semibold text-lg">
				{$t.aboutUs}
			</div>
			<a href="imprint" class="text-sm text-slate-700">{$t.imprint}</a>
			<a href="team" class="text-sm text-slate-700">{$t.team.team}</a>
			<a href="career" class="text-sm text-slate-700">{$t.jobs.career}</a>
			<a href="privacy" class="text-sm text-slate-700">{$t.gdpr}</a>
		</div>
		<div class="flex flex-col gap-3">
			<div class="text-slate-900 font-semibold text-lg">
				{$t.community}
			</div>
			<a href="https://github.com/konzept7/" class="flex flex-row gap-2">
				<div class="w-5 h-5 stroke-slate-800 stroke-[1.5]">
					<IconBrandGithub />
				</div>
				<div class="text-sm text-slate-700">GitHub</div>
			</a>
			<a href="https://www.linkedin.com/company/k-7/" class="flex flex-row gap-2">
				<div class="w-5 h-5 stroke-slate-800 stroke-[1.5]">
					<IconBrandLinkedin />
				</div>
				<div class="text-sm text-slate-700">LinkedIn</div>
			</a>
		</div>
	</div>
	<!--         
          <Stack spacing={4} align="flex-start">
            <img
              src={theme.colorScheme === "light" ? LogoBlack : LogoWhite}
              alt="K7 Logo"
              height={40}
            />
            <Space h={15} />
            <Title
              className={classes.portalHeader}
              lh={1.1}
              style={{ fontFamily: "Kufam, sans-serif" }}
              order={4}
              my={0}
            >
              K7 - Konzept Karlsruhe
            </Title>
            <Text lh={1.1} color="dimmed" size="sm">
              Roonstraße 23a, 76137 Karlsruhe
            </Text>
            <Text lh={1.1} color="dimmed" size="xs">
              &copy; 2022-{new Date().getFullYear()}
            </Text>
          </Stack>
        
        <Group spacing={theme.spacing.xl * 2} align="flex-start">
          <Stack spacing={4}>
            <Title className={classes.portalHeader} order={5}>
              {t("aboutUs")}
            </Title>
            <Link to="imprint">
              <Text size="sm">{t("imprint")}</Text>
            </Link>
            <Link to="team">
              <Text size="sm">{t("team.team")}</Text>
            </Link>
            <Link to="jobs">
              <Text size="sm">{t("jobs.career")}</Text>
            </Link>
            <Link to="gdpr">
              <Text size="sm">{t("gdpr")}</Text>
            </Link>
          </Stack>
          <Stack spacing={4}>
            <Title className={classes.portalHeader} order={5}>
              {t("community")}
            </Title>
            <Anchor href="https://github.com/konzept7/" target="_blank">
              <Group spacing={2}>
                <IconBrandGithub size={18} stroke={1.5} />
                <Text size="sm">GitHub</Text>
                <IconExternalLink size={18} stroke={1.5} />
              </Group>
            </Anchor>
            <Anchor href="https://facebook.com/konzept7" target="_blank">
              <Group spacing={2}>
                <IconBrandFacebook size={18} stroke={1.5} />
                <Text size="sm">Facebook</Text>
                <IconExternalLink size={18} stroke={1.5} />
              </Group>
            </Anchor>
          </Stack>
        </Group> -->
</div>
